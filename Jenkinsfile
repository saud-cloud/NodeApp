node {
    def app
	
    stage('clone repository & Build image ') {
        /* This builds the actual image */
	checkout scm

        app = docker.build("saud12345/pipeline")
    }

    stage('Test image') {
        
        app.inside {
            echo "Tests passed"
        }
    }

    stage('Deploy to Dev') {
        /* 
			You would need to first register with DockerHub before you can push images to your account
		*/
      mail bcc: '', body: 'hi this is jenkins build email Please go to console output of ${env.BUILD_URL} to approve or Reject. http://35.177.175.56:8080/ you can use  the following credentials to login to your account Username : Manager , Password: admin', cc: '', from: '', replyTo: '', subject: 'jenkinsjon', to: 'saudjunaid96@gmail.com'
	    def userInput = input(id: 'userInput', message: 'type anything if you want to start the job', ok: 'Yes')
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
	    sh "echo Hello from SHELL"
            sh " docker run -d  -p 80:8000 saud12345/pipeline "
        } 
                echo "Trying to Push Docker Build to DockerHub"
    }
	
    stage('Deploy to EC2'){
	
       
        sshagent(credentials : ['server-id']) {
            sh 'docker pull saud12345/pipeline:latest'
            sh 'docker run -d --name App -p 8000:8000 saud12345/pipeline'
            
        }
       

	    echo "Trying to Pull Docker Build to DockerHub"
     //  mail bcc: '', body: 'hi this is jenkins build email Please go to console output of ${env.BUILD_URL} to approve or Reject. http://35.177.175.56:8080/', cc: '', from: '', replyTo: '', subject: 'jenkinsjon', to: 'gkhan@enquizit.com'
	//    def userInput = input(id: 'userInput', message: 'type anything if you want to start the job', ok: 'Yes')
    }
  
}
