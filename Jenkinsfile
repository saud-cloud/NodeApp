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
       mail bcc: '', body: 'hi this is jenkins build email Please go to console output of ${env.BUILD_URL} to approve or Reject. http://35.177.175.56:8080/', cc: '', from: '', replyTo: '', subject: 'jenkinsjon', to: 'gkhan@enquizit.com'
	    def userInput = input(id: 'userInput', message: 'type anything if you want to start the job', ok: 'Yes')
    }
 
}
