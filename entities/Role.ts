import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Index("role_pkey", ["id"], { unique: true })
@Entity("role", { schema: "public" })
export class Role {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "nome" })
  nome: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.roles)
  @JoinTable({
    name: "usuario_role",
    joinColumns: [{ name: "id_role", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "id_usuario", referencedColumnName: "id" }],
    schema: "public",
  })
  usuarios: Usuario[];
}
