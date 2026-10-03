import type { Usuario } from '../types/Usuario';

export default function UsuarioItem({ usuario }: { usuario: Usuario }) {
  return <div><strong>{usuario.nome}</strong> <span>({usuario.username}) — {usuario.email}</span></div>;
}
