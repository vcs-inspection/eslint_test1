pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
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
            if (env.BRANCH_NAME == 'master') {
                currentBuild.result = 'SUCCESS'
                return
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}