// Code generated by GENERATOR. DO NOT EDIT.
import * as jspb from 'google-protobuf';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as onos_config_snapshot_types_pb from '../../../../onos/config/snapshot/types_pb';
import * as onos_config_change_device_types_pb from '../../../../onos/config/change/device/types_pb';

export class DeviceSnapshot extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceVersion(): string;
  setDeviceVersion(value: string): void;

  getDeviceType(): string;
  setDeviceType(value: string): void;

  getRevision(): number;
  setRevision(value: number): void;

  getNetworkSnapshot(): NetworkSnapshotRef | undefined;
  setNetworkSnapshot(value?: NetworkSnapshotRef): void;
  hasNetworkSnapshot(): boolean;
  clearNetworkSnapshot(): void;

  getMaxNetworkChangeIndex(): number;
  setMaxNetworkChangeIndex(value: number): void;

  getStatus(): onos_config_snapshot_types_pb.Status | undefined;
  setStatus(value?: onos_config_snapshot_types_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdated(): boolean;
  clearUpdated(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSnapshot): DeviceSnapshot.AsObject;
  static serializeBinaryToWriter(message: DeviceSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSnapshot;
  static deserializeBinaryFromReader(message: DeviceSnapshot, reader: jspb.BinaryReader): DeviceSnapshot;
}

export namespace DeviceSnapshot {
  export type AsObject = {
    id: string,
    deviceId: string,
    deviceVersion: string,
    deviceType: string,
    revision: number,
    networkSnapshot?: NetworkSnapshotRef.AsObject,
    maxNetworkChangeIndex: number,
    status?: onos_config_snapshot_types_pb.Status.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class NetworkSnapshotRef extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkSnapshotRef.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkSnapshotRef): NetworkSnapshotRef.AsObject;
  static serializeBinaryToWriter(message: NetworkSnapshotRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkSnapshotRef;
  static deserializeBinaryFromReader(message: NetworkSnapshotRef, reader: jspb.BinaryReader): NetworkSnapshotRef;
}

export namespace NetworkSnapshotRef {
  export type AsObject = {
    id: string,
    index: number,
  }
}

export class Snapshot extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getDeviceVersion(): string;
  setDeviceVersion(value: string): void;

  getDeviceType(): string;
  setDeviceType(value: string): void;

  getSnapshotId(): string;
  setSnapshotId(value: string): void;

  getChangeIndex(): number;
  setChangeIndex(value: number): void;

  getValuesList(): Array<onos_config_change_device_types_pb.PathValue>;
  setValuesList(value: Array<onos_config_change_device_types_pb.PathValue>): void;
  clearValuesList(): void;
  addValues(value?: onos_config_change_device_types_pb.PathValue, index?: number): onos_config_change_device_types_pb.PathValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    id: string,
    deviceId: string,
    deviceVersion: string,
    deviceType: string,
    snapshotId: string,
    changeIndex: number,
    valuesList: Array<onos_config_change_device_types_pb.PathValue.AsObject>,
  }
}

