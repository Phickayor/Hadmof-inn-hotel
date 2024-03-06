"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessPayload = exports.login = exports.registerAUser = void 0;
var auth_model_1 = __importDefault(require("../models/auth.model"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_utill_1 = require("../utils/bcrypt.utill");
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, findExistingMail, comparePassword, id, token, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, auth_model_1.default.findOne({ email: email })];
            case 1:
                findExistingMail = _b.sent();
                if (!findExistingMail) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, bcrypt_utill_1.decryptPassword)(password, findExistingMail.password)];
            case 2:
                comparePassword = _b.sent();
                if (comparePassword) {
                    id = findExistingMail._id;
                    token = jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET_KEY, {
                        expiresIn: "2hrs"
                    });
                    res.status(200).json({ message: "Login Successful", token: token });
                }
                else {
                    res.status(403).json({ message: "Incorrect Password" });
                }
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: "User does not have an account" });
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                res.status(501).json({ message: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var registerAUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, findExistingMail, hashedPassword, findId, id, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                return [4 /*yield*/, auth_model_1.default.findOne({ email: email })];
            case 1:
                findExistingMail = _b.sent();
                if (!!findExistingMail) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, bcrypt_utill_1.encyrptPassword)(password)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, auth_model_1.default.create({
                        username: username,
                        email: email,
                        password: hashedPassword
                    })];
            case 3:
                _b.sent();
                return [4 /*yield*/, auth_model_1.default.findOne({ email: email })];
            case 4:
                findId = _b.sent();
                id = findId._id;
                token = jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET_KEY, {
                    expiresIn: "2hrs"
                });
                res.status(200).json({ message: "Account Created", token: token });
                return [3 /*break*/, 6];
            case 5:
                res.status(403).json({ message: "User already have an account" });
                _b.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                res.status(501).json({ message: error_2.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.registerAUser = registerAUser;
var accessPayload = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, tokenArray, justTokenArray, justToken, id;
    return __generator(this, function (_a) {
        try {
            token = req.headers.authorization;
            tokenArray = token.split("");
            justTokenArray = tokenArray.splice(7);
            justToken = justTokenArray.join("");
            id = jsonwebtoken_1.default.verify(justToken, process.env.SECRET_KEY).id;
            req.body.auth = id;
            next();
        }
        catch (error) {
            res.status(501).json({ message: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.accessPayload = accessPayload;