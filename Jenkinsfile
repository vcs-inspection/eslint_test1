pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo $PATH
                sh """
                    node --version
                    npm --version
                    bower --version
                    npm i -g eslint@5.16.0
                    npm i -g babel-eslint
                    ls

                    eslint -c .eslintrc.json -f checkstyle src/**.js -o src/checkstyle-result.xml
                """
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}