"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const create_item_dto_1 = require("./dto/create-item.dto");
const swagger_1 = require("@nestjs/swagger");
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    create(createItemDto) {
        return this.itemService.create(createItemDto);
    }
    findAll(sortBy, order, search, filterByUnit, filterByBrandId, filterByManufacturerId, filterByCategoryId) {
        return this.itemService.findAll(sortBy, order, search, filterByUnit, filterByBrandId, filterByManufacturerId, filterByCategoryId);
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new item' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Item created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid data.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all items' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of items.' }),
    (0, swagger_1.ApiQuery)({ name: 'filterByUnit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'filterByBrandId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'filterByManufacturerId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'filterByCategoryId', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'order', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false }),
    __param(0, (0, common_1.Query)('sortBy')),
    __param(1, (0, common_1.Query)('order')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('filterByUnit')),
    __param(4, (0, common_1.Query)('filterByBrandId')),
    __param(5, (0, common_1.Query)('filterByManufacturerId')),
    __param(6, (0, common_1.Query)('filterByCategoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ItemController.prototype, "findAll", null);
exports.ItemController = ItemController = __decorate([
    (0, swagger_1.ApiTags)('items'),
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
//# sourceMappingURL=item.controller.js.map