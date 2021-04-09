exports.handler = async (event, context) => {
    console.log("hit!");
    return {
        statusCode: 200,
        body: JSON.stringify({ greeting: 'Hello there!' })
    };
}