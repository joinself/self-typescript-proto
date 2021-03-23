import { msgproto as msgproto_1 } from "./msgtype";
import { msgproto as msgproto_2 } from "./errtype";
import * as pb_1 from "google-protobuf";
export namespace msgproto {
    export class Notification extends pb_1.Message {
        constructor(data?: any[] | {
            type?: msgproto_1.;
            id?: string;
            error?: string;
            errtype?: msgproto_2.;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.type = data.type;
                this.id = data.id;
                this.error = data.error;
                this.errtype = data.errtype;
            }
        }
        get type(): msgproto_1. {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as msgproto_1.;
        }
        set type(value: msgproto_1.) {
            pb_1.Message.setField(this, 1, value);
        }
        get id(): string {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get error(): string {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
        }
        set error(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get errtype(): msgproto_2. {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as msgproto_2.;
        }
        set errtype(value: msgproto_2.) {
            pb_1.Message.setField(this, 4, value);
        }
        toObject() {
            return {
                type: this.type,
                id: this.id,
                error: this.error,
                errtype: this.errtype
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type !== undefined)
                writer.writeEnum(1, this.type);
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(2, this.id);
            if (typeof this.error === "string" && this.error.length)
                writer.writeString(3, this.error);
            if (this.errtype !== undefined)
                writer.writeEnum(4, this.errtype);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Notification {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Notification();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.type = reader.readEnum();
                        break;
                    case 2:
                        message.id = reader.readString();
                        break;
                    case 3:
                        message.error = reader.readString();
                        break;
                    case 4:
                        message.errtype = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
