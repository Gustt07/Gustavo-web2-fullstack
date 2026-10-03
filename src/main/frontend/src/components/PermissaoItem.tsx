import type { Permissao } from '../types/Permissao';

export default function PermissaoItem({ permissao }: { permissao: Permissao }) {
  return <div><strong>{permissao.nome}</strong> <span>— {permissao.descricao}</span></div>;
}
