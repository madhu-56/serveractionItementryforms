import mongoose, {Schema} from "mongoose";

const ItemSchema = new Schema({
    itemName:String,
    price:Number,
});

const Item = mongoose.models.product || mongoose.model('product',ItemSchema )
export default Item;