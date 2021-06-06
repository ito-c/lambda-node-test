'use strict';

const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: "ap-northeast-1"
});

exports.handler = async (event) => {
  const params = {
    TableName: "lambda-node-test_db"
  }

  try {
    console.log('event')
    console.log(event)
    const result = await dynamoDB.scan(params).promise();
    console.log('result')
    console.log(result)
    // 正常に取得できたらその値を返す
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (e) {
    console.log('e')
    console.log(e)
    return {
      statusCode: e.statusCode,
      body: e.message,
    };
  }
}
