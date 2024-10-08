// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var NetEncoding = NetEncoding || {};

/**
 * @enum
 */
NetEncoding.TypedArray = {
  NONE: 0,
  0: "NONE",
  Float32Array: 1,
  1: "Float32Array",
  Int32Array: 2,
  2: "Int32Array",
  Uint32Array: 3,
  3: "Uint32Array",
  Float64Array: 4,
  4: "Float64Array",
  JSONEncodedArray: 5,
  5: "JSONEncodedArray",
};

/**
 * @constructor
 */
NetEncoding.Float32Array = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Float32Array}
 */
NetEncoding.Float32Array.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Float32Array=} obj
 * @returns {NetEncoding.Float32Array}
 */
NetEncoding.Float32Array.getRootAsFloat32Array = function (bb, obj) {
  return (obj || new NetEncoding.Float32Array()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @param {number} index
 * @returns {number}
 */
NetEncoding.Float32Array.prototype.data = function (index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + offset) + index * 4)
    : 0;
};

/**
 * @returns {number}
 */
NetEncoding.Float32Array.prototype.dataLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Float32Array}
 */
NetEncoding.Float32Array.prototype.dataArray = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? new Float32Array(
        this.bb.bytes().buffer,
        this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
        this.bb.__vector_len(this.bb_pos + offset)
      )
    : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Float32Array.startFloat32Array = function (builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
NetEncoding.Float32Array.addData = function (builder, dataOffset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Float32Array.createDataVector = function (builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.Float32Array.startDataVector = function (builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Float32Array.endFloat32Array = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.Uint32Array = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Uint32Array}
 */
NetEncoding.Uint32Array.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Uint32Array=} obj
 * @returns {NetEncoding.Uint32Array}
 */
NetEncoding.Uint32Array.getRootAsUint32Array = function (bb, obj) {
  return (obj || new NetEncoding.Uint32Array()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @param {number} index
 * @returns {number}
 */
NetEncoding.Uint32Array.prototype.data = function (index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4)
    : 0;
};

/**
 * @returns {number}
 */
NetEncoding.Uint32Array.prototype.dataLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
NetEncoding.Uint32Array.prototype.dataArray = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? new Uint32Array(
        this.bb.bytes().buffer,
        this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
        this.bb.__vector_len(this.bb_pos + offset)
      )
    : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Uint32Array.startUint32Array = function (builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
NetEncoding.Uint32Array.addData = function (builder, dataOffset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Uint32Array.createDataVector = function (builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.Uint32Array.startDataVector = function (builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Uint32Array.endUint32Array = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.Int32Array = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Int32Array}
 */
NetEncoding.Int32Array.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Int32Array=} obj
 * @returns {NetEncoding.Int32Array}
 */
NetEncoding.Int32Array.getRootAsInt32Array = function (bb, obj) {
  return (obj || new NetEncoding.Int32Array()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @param {number} index
 * @returns {number}
 */
NetEncoding.Int32Array.prototype.data = function (index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4)
    : 0;
};

/**
 * @returns {number}
 */
NetEncoding.Int32Array.prototype.dataLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Int32Array}
 */
NetEncoding.Int32Array.prototype.dataArray = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? new Int32Array(
        this.bb.bytes().buffer,
        this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
        this.bb.__vector_len(this.bb_pos + offset)
      )
    : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Int32Array.startInt32Array = function (builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
NetEncoding.Int32Array.addData = function (builder, dataOffset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Int32Array.createDataVector = function (builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.Int32Array.startDataVector = function (builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Int32Array.endInt32Array = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.Float64Array = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Float64Array}
 */
NetEncoding.Float64Array.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Float64Array=} obj
 * @returns {NetEncoding.Float64Array}
 */
NetEncoding.Float64Array.getRootAsFloat64Array = function (bb, obj) {
  return (obj || new NetEncoding.Float64Array()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @param {number} index
 * @returns {number}
 */
NetEncoding.Float64Array.prototype.data = function (index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? this.bb.readFloat64(this.bb.__vector(this.bb_pos + offset) + index * 8)
    : 0;
};

/**
 * @returns {number}
 */
NetEncoding.Float64Array.prototype.dataLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Float64Array}
 */
NetEncoding.Float64Array.prototype.dataArray = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? new Float64Array(
        this.bb.bytes().buffer,
        this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
        this.bb.__vector_len(this.bb_pos + offset)
      )
    : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Float64Array.startFloat64Array = function (builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
NetEncoding.Float64Array.addData = function (builder, dataOffset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Float64Array.createDataVector = function (builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.Float64Array.startDataVector = function (builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Float64Array.endFloat64Array = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.JSONEncodedArray = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.JSONEncodedArray}
 */
NetEncoding.JSONEncodedArray.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.JSONEncodedArray=} obj
 * @returns {NetEncoding.JSONEncodedArray}
 */
NetEncoding.JSONEncodedArray.getRootAsJSONEncodedArray = function (bb, obj) {
  return (obj || new NetEncoding.JSONEncodedArray()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @param {number} index
 * @returns {number}
 */
NetEncoding.JSONEncodedArray.prototype.data = function (index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index)
    : 0;
};

/**
 * @returns {number}
 */
NetEncoding.JSONEncodedArray.prototype.dataLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
NetEncoding.JSONEncodedArray.prototype.dataArray = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? new Uint8Array(
        this.bb.bytes().buffer,
        this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
        this.bb.__vector_len(this.bb_pos + offset)
      )
    : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.JSONEncodedArray.startJSONEncodedArray = function (builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
NetEncoding.JSONEncodedArray.addData = function (builder, dataOffset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.JSONEncodedArray.createDataVector = function (builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.JSONEncodedArray.startDataVector = function (builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.JSONEncodedArray.endJSONEncodedArray = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.Column = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Column}
 */
NetEncoding.Column.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Column=} obj
 * @returns {NetEncoding.Column}
 */
NetEncoding.Column.getRootAsColumn = function (bb, obj) {
  return (obj || new NetEncoding.Column()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @returns {NetEncoding.TypedArray}
 */
NetEncoding.Column.prototype.uType = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset
    ? /** @type {NetEncoding.TypedArray} */ (
        this.bb.readUint8(this.bb_pos + offset)
      )
    : NetEncoding.TypedArray.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
NetEncoding.Column.prototype.u = function (obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Column.startColumn = function (builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {NetEncoding.TypedArray} uType
 */
NetEncoding.Column.addUType = function (builder, uType) {
  builder.addFieldInt8(0, uType, NetEncoding.TypedArray.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} uOffset
 */
NetEncoding.Column.addU = function (builder, uOffset) {
  builder.addFieldOffset(1, uOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Column.endColumn = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
NetEncoding.Matrix = function () {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {NetEncoding.Matrix}
 */
NetEncoding.Matrix.prototype.__init = function (i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {NetEncoding.Matrix=} obj
 * @returns {NetEncoding.Matrix}
 */
NetEncoding.Matrix.getRootAsMatrix = function (bb, obj) {
  return (obj || new NetEncoding.Matrix()).__init(
    bb.readInt32(bb.position()) + bb.position(),
    bb
  );
};

/**
 * @returns {number}
 */
NetEncoding.Matrix.prototype.nRows = function () {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
NetEncoding.Matrix.prototype.nCols = function () {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {NetEncoding.Column=} obj
 * @returns {NetEncoding.Column}
 */
NetEncoding.Matrix.prototype.columns = function (index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset
    ? (obj || new NetEncoding.Column()).__init(
        this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
        this.bb
      )
    : null;
};

/**
 * @returns {number}
 */
NetEncoding.Matrix.prototype.columnsLength = function () {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {NetEncoding.TypedArray}
 */
NetEncoding.Matrix.prototype.colIndexType = function () {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset
    ? /** @type {NetEncoding.TypedArray} */ (
        this.bb.readUint8(this.bb_pos + offset)
      )
    : NetEncoding.TypedArray.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
NetEncoding.Matrix.prototype.colIndex = function (obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @returns {NetEncoding.TypedArray}
 */
NetEncoding.Matrix.prototype.rowIndexType = function () {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset
    ? /** @type {NetEncoding.TypedArray} */ (
        this.bb.readUint8(this.bb_pos + offset)
      )
    : NetEncoding.TypedArray.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
NetEncoding.Matrix.prototype.rowIndex = function (obj) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
NetEncoding.Matrix.startMatrix = function (builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} nRows
 */
NetEncoding.Matrix.addNRows = function (builder, nRows) {
  builder.addFieldInt32(0, nRows, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} nCols
 */
NetEncoding.Matrix.addNCols = function (builder, nCols) {
  builder.addFieldInt32(1, nCols, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} columnsOffset
 */
NetEncoding.Matrix.addColumns = function (builder, columnsOffset) {
  builder.addFieldOffset(2, columnsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Matrix.createColumnsVector = function (builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
NetEncoding.Matrix.startColumnsVector = function (builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {NetEncoding.TypedArray} colIndexType
 */
NetEncoding.Matrix.addColIndexType = function (builder, colIndexType) {
  builder.addFieldInt8(3, colIndexType, NetEncoding.TypedArray.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} colIndexOffset
 */
NetEncoding.Matrix.addColIndex = function (builder, colIndexOffset) {
  builder.addFieldOffset(4, colIndexOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {NetEncoding.TypedArray} rowIndexType
 */
NetEncoding.Matrix.addRowIndexType = function (builder, rowIndexType) {
  builder.addFieldInt8(5, rowIndexType, NetEncoding.TypedArray.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} rowIndexOffset
 */
NetEncoding.Matrix.addRowIndex = function (builder, rowIndexOffset) {
  builder.addFieldOffset(6, rowIndexOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
NetEncoding.Matrix.endMatrix = function (builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
NetEncoding.Matrix.finishMatrixBuffer = function (builder, offset) {
  builder.finish(offset);
};

// Exports for ECMAScript6 Modules
export { NetEncoding };
