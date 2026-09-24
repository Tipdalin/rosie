pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'tipdalin12/nextjs-frontend'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build Next.js') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                        -t ${DOCKER_IMAGE}:${DOCKER_TAG} \
                        -t ${DOCKER_IMAGE}:latest \
                        .
                '''
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                            -u "$DOCKER_USERNAME" \
                            --password-stdin

                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest

                        docker logout
                    '''
                }
            }
        }
        stage('Update GitOps') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'github-gitops',
                        usernameVariable: 'GIT_USERNAME',
                        passwordVariable: 'GIT_TOKEN'
                    )
                ]) {
                    sh '''
                        rm -rf gitops

                        git clone https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/Tipdalin/rosie-frontend-gitops.git gitops

                        cd gitops

                        sed -i "s/tag: \".*\"/tag: \"${DOCKER_TAG}\"/" nextjs-frontend/values.yaml

                        git config user.name "Jenkins"
                        git config user.email "jenkins@localhost"

                        git add nextjs-frontend/values.yaml
                        git commit -m "update frontend image to ${DOCKER_TAG}"
                        git push origin main
                    '''
                }
            }
        }
    }
}