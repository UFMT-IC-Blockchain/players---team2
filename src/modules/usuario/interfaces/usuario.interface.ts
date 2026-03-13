import { LoginDto } from "../dto/usuario.dto";

export interface IUsuario {


    validaLogin(usuario: LoginDto): string;



}