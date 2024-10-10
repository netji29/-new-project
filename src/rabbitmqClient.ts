import amqp from 'amqplib';

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect('amqp://rabbitmq'); // ชื่อบริการใน Docker Compose
    const channel = await connection.createChannel();
    console.log('Connected to RabbitMQ');
    return channel;
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
  }
};

export default connectRabbitMQ;
