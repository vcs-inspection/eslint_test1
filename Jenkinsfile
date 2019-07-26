pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') {
            if [ $RESULT -eq 1 ]; then exit 0; fi
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
                    npm run build
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