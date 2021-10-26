const { Kafka } = require("kafkajs");


createTopic();

async function createTopic() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_test",
            brokers: ["10.13.3.53:29092"]
        });
        const admin = kafka.admin();
        console.log("Kafka connecting")
        await admin.connect();
        console.log("Kafka connected")
        await admin.createTopics({
            topics: [
                {
                    topic: "Logs_test",
                    numPartitions: 1
                },
                {
                    topic: "Logs2_test",
                    numPartitions: 2
                }
            ]
        })
        console.log("Topic created")
    } catch (error) {
        console.log("Errorrger", error)
    }
    finally {
        process.exit(0)
    }
}