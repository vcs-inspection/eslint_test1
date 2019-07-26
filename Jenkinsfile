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

                    eslint -c .eslintrc.json -f checkstyle src/**.js -o src/checkstyle-result.xml || exit 0
                    xml-js src/checkstyle-result.xml --spaces 4 --out src/checkstyle-result.json
                """
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh """
                    npm i -g xml-js
                    xml-js src/checkstyle-result.xml --spaces 4 --out src/checkstyle-result.json
                """
            }
        }
    }
}