/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http.ts";

/**
* Condition contains details for one aspect of the current state of this API Resource.
*/
export class IoK8sApimachineryPkgApisMetaV1Condition {
  /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
  "lastTransitionTime": Date;
  /**
    * message is a human readable message indicating details about the transition. This may be an empty string.
    */
  "message": string;
  /**
    * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
    */
  "observedGeneration"?: number;
  /**
    * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
    */
  "reason": string;
  /**
    * status of the condition, one of True, False, Unknown.
    */
  "status": string;
  /**
    * type of condition in CamelCase or in foo.example.com/CamelCase.
    */
  "type": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "lastTransitionTime",
      "baseName": "lastTransitionTime",
      "type": "Date",
      "format": "date-time",
    },
    {
      "name": "message",
      "baseName": "message",
      "type": "string",
      "format": "",
    },
    {
      "name": "observedGeneration",
      "baseName": "observedGeneration",
      "type": "number",
      "format": "int64",
    },
    {
      "name": "reason",
      "baseName": "reason",
      "type": "string",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "string",
      "format": "",
    },
    {
      "name": "type",
      "baseName": "type",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return IoK8sApimachineryPkgApisMetaV1Condition.attributeTypeMap;
  }

  public constructor() {
  }
}