pipeline {

    agent any

    stages {

        stage('Clonar proyecto') {
            steps {
                checkout scm
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                sh 'docker build -t devops-demo .'
            }
        }

        stage('Desplegar contenedor') {
            steps {
                sh '''
                docker stop devops-app || true
                docker rm devops-app || true

                docker run -d \
                  --name devops-app \
                  -p 3000:3000 \
                  devops-demo
                '''
            }
        }
    }
}