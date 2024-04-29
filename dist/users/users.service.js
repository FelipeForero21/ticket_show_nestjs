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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const gender_entity_1 = require("../genders/entities/gender.entity");
let UsersService = class UsersService {
    constructor(userRepository, genderRepository) {
        this.userRepository = userRepository;
        this.genderRepository = genderRepository;
    }
    async create(createUserDto) {
        const { identificationNumber } = createUserDto;
        const existingUser = await this.userRepository.findOne({
            where: { identificationNumber },
        });
        if (existingUser) {
            throw new common_1.ConflictException('The Identification Number is already in use');
        }
        const gender = await this.genderRepository.findOneBy({
            gender: createUserDto.gender,
        });
        if (!gender) {
            throw new common_1.BadRequestException('Gender not found');
        }
        const newUser = this.userRepository.create({ ...createUserDto, gender });
        return await this.userRepository.save(newUser);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async remove(id) {
        return await this.userRepository.softDelete({ id });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(gender_entity_1.Gender)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map