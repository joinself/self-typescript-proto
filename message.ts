import { msgproto as msgproto_1 } from "./msgtype";
import { google as google_1 } from "./google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace msgproto {
    export class Message extends pb_1.Message {
        constructor(data?: any[] | {
            type?: msgproto_1.;
            id?: string;
            sender?: string;
            recipient?: string;
            ciphertext?: Uint8Array;
            timestamp?: google_1.protobuf.Timestamp;
            offset?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.type = data.type;
                this.id = data.id;
                this.sender = data.sender;
                this.recipient = data.recipient;
                this.ciphertext = data.ciphertext;
                this.timestamp = data.timestamp;
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
        get sender(): string {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get recipient(): string {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string;
        }
        set recipient(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get ciphertext(): Uint8Array {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as Uint8Array;
        }
        set ciphertext(value: Uint8Array) {
            pb_1.Message.setField(this, 5, value);
        }
        get timestamp(): google_1.protobuf.Timestamp {
            return pb_1.Message.getWrapperField(this, google_1.protobuf.Timestamp, 6) as google_1.protobuf.Timestamp;
        }
        set timestamp(value: google_1.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get offset(): number {
            return pb_1.Message.getFieldWithDefault(this, 7, undefined) as number;
        }
        set offset(value: number) {
            pb_1.Message.setField(this, 7, value);
        }
        toObject() {
            return {
                type: this.type,
                id: this.id,
                sender: this.sender,
                recipient: this.recipient,
                ciphertext: this.ciphertext,
                timestamp: this.timestamp && this.timestamp.toObject(),
                offset: this.offset
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.type !== undefined)
                writer.writeEnum(1, this.type);
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(2, this.id);
            if (typeof this.sender === "string" && this.sender.length)
                writer.writeString(3, this.sender);
            if (typeof this.recipient === "string" && this.recipient.length)
                writer.writeString(4, this.recipient);
            if (this.ciphertext !== undefined)
                writer.writeBytes(5, this.ciphertext);
            if (this.timestamp !== undefined)
                writer.writeMessage(6, this.timestamp, () => this.timestamp.serialize(writer));
            if (this.offset !== undefined)
                writer.writeInt64(7, this.offset);
            if (!w)
                return writer.getResultBuffer();
        }
        serializeBinary(): Uint8Array { throw new Error("Method not implemented."); }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Message();
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
                        message.sender = reader.readString();
                        break;
                    case 4:
                        message.recipient = reader.readString();
                        break;
                    case 5:
                        message.ciphertext = reader.readBytes();
                        break;
                    case 6:
                        reader.readMessage(message.timestamp, () => message.timestamp = google_1.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 7:
                        message.offset = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
}
