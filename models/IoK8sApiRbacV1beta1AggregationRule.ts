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

import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector.ts';
import { HttpFile } from '../http/http.ts';

/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
export class IoK8sApiRbacV1beta1AggregationRule {
    /**
    * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
    */
    'clusterRoleSelectors'?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelector>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterRoleSelectors",
            "baseName": "clusterRoleSelectors",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1LabelSelector>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiRbacV1beta1AggregationRule.attributeTypeMap;
    }
    
    public constructor() {
    }
}
