import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";

export class Level3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, "AssetFunction", {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, ".")),
    });
  }
}
