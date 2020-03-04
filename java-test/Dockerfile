FROM openjdk:11

VOLUME /tmp
ADD /target/java-test-0.0.1-SNAPSHOT.jar test.jar
ENTRYPOINT ["java", "-jar", "test.jar"]
