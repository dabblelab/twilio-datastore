const twilio = require('twilio');


exports.getUserDetail = async(accountSid, authToken) => {

    const client = twilio(accountSid, authToken);

    try {

        return client.api
                .accounts(accountSid)
                .fetch();
    }catch(error){
        throw error;
    }
    
}