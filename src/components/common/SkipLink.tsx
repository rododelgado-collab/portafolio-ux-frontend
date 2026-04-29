const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-500 focus:text-white focus:rounded-br-lg"
      aria-label="Saltar al contenido principal"
    >
      Saltar a contenido principal
    </a>
  )
}

export default SkipLink
