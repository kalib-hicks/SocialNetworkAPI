const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
           type: String ,
           unique: true,
           required: 'You give us username',
            trim: true
        },
        email: {
            type:String ,
            unique: true,
            required: true,
            match: [/.+@.+\..+/]
         },
         thought: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],


         friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
        },
        {
            toJSON: {
                virtuals: true,
                getters: true
              },
              id: false
            }   
    );

    UserSchema.virtual('friendCount').get(function() {
        return this.friends.length;
      });
      
    const User = model(' User',  UserSchema);

module.exports = User;