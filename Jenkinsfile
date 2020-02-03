node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("saud12345/pipeline")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            } 
                echo "Trying to Push Docker Build to DockerHub"
    }
	
    stage('pull image'){
	docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            //image = docker.image('saud12345/pipeline:latest')
            //image.pull()
	    app.pull("${env.BUILD_NUMBER}")
            app.pull("latest")	
            }
	    steps {
                echo "Hello World!"
                sh "echo Hello from the shell"
               // sh "docker run -it -p 8000:8000 saud12345/pipeline:latest"
               // sh "uptime"
            }
	    
    }
}
