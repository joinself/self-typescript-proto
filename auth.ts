import { msgproto as msgproto_1 } from "./msgtype";
import * as pb_1 from "google-protobuf";
export namespace msgproto {
    export class Auth extends pb_1.Message {
        constructor(data?: any[] | {
            type?: msgproto_1.;
            id?: string;
            token?: string;
            device?: string;
            offset?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.type = data.type;
                this.id = data.id;
                this.token = data.token;
                this.device = data.device;
                this.offset = data.offset;
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
        get token(): string {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get device(): string {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
        }
        set device(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get offset(): number {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number;
        }
        set offset(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        toObject() {
            return {
                type: this.type,
                id: this.id,
                token: this.token,
                device: this.device,
                offset: this.offset
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type !== undefined)
                writer.writeEnum(1, this.type);
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(2, this.id);
            if (typeof this.token === "string" && this.token.length)
                writer.writeString(3, this.token);
            if (typeof this.device === "string" && this.device.length)
                writer.writeString(4, this.device);
            if (this.offset !== undefined)
                writer.writeInt64(5, this.offset);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Auth {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Auth();
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
                        message.token = reader.readString();
                        break;
                    case 4:
                        message.device = reader.readString();
                        break;
                    case 5:
                        message.offset = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
