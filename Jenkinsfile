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
	
       sh "echo Hello from SHELL"
       sh " docker run -d  -p 80:8000 saud12345/pipeline "


	    echo "Trying to Pull Docker Build to DockerHub"
       mail bcc: '', body: 'hi this is jenkins build email', cc: '', from: '', replyTo: '', subject: 'jenkinsjon', to: 'saudjunaid96@gmail.com'
    }
 
}
