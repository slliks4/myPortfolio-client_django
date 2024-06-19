import BoxThemeProvider from "../providers/BoxThemeProvider";

// Default Function
export default function BreadCrumps() {
  return (
    <BoxThemeProvider children={
      <div className="bread-crumps">BreadCrumps</div>
    } className={'w-full flex my-4'} />
  )
}

