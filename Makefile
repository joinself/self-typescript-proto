generate:
	PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
	OUT_DIR="./"
	protoc \
    	--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    	--js_out="import_style=commonjs,binary:${OUT_DIR}" \
    	--ts_out="${OUT_DIR}" \
  		--proto_path="../self-messaging-proto/" acl.proto aclcommand.proto auth.proto errtype.proto header.proto message.proto msgtype.proto notification.proto