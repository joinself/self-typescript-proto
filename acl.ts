import { msgproto as msgproto_1 } from "./msgtype";
import { msgproto as msgproto_2 } from "./aclcommand";
import * as pb_1 from "google-protobuf";
export namespace msgproto {
    export class AccessControlList extends pb_1.Message {
        constructor(data?: any[] | {
            type?: msgproto_1.;
            id?: string;
            command?: msgproto_2.;
            payload?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.type = data.type;
                this.id = data.id;
                this.command = data.command;
                this.payload = data.payload;
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
        get command(): msgproto_2. {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as msgproto_2.;
        }
        set command(value: msgproto_2.) {
            pb_1.Message.setField(this, 3, value);
        }
        get payload(): Uint8Array {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as Uint8Array;
        }
        set payload(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        toObject() {
            return {
                type: this.type,
                id: this.id,
                command: this.command,
                payload: this.payload
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type !== undefined)
                writer.writeEnum(1, this.type);
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(2, this.id);
            if (this.command !== undefined)
                writer.writeEnum(3, this.command);
            if (this.payload !== undefined)
                writer.writeBytes(4, this.payload);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AccessControlList {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new AccessControlList();
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
                        message.command = reader.readEnum();
                        break;
                    case 4:
                        message.payload = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
