import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
videfeild:{
    type: string, // cloudniary url
    required: true

},
thumbnail: {
    type: string, // cloudniary url
    required: true
},
title: {
    type: string,  
    required: true
},
descroption: {
    type: string,  
    required: true
},
duration: {
    type: number, // cloudniary url
    required: true
},
views: {
    type: number,
    default: true 
},
owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
}



    },
    {
        timestamps: true
    }
)


export const Video = mongoose.model("Video", VideoSchema)