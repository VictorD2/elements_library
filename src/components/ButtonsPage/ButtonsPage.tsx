import React from 'react'
import AppButton from '../../elements/app_button'
import AppContainer from '../../elements/app_container'

export const ButtonsPage = () => {
  return (
    <AppContainer className="p-10 gap-10 flex-wrap" alignItems="items-center" width="w-full" justifyContent="justify-center">
      <AppContainer className="gap-10 flex-wrap" alignItems="items-start" height="h-full" width="w-full" justifyContent="justify-center">
        <AppButton text="Click me" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-secondary" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-background" textColor="text-black" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-black" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-white" textColor="text-black" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-gray-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-indigo-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-red-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-yellow-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-green-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-blue-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-rose-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-amber-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-cyan-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-emerald-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-fuchsia-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-lime-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-orange-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-pink-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-purple-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-sky-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-slate-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-stone-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-teal-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-violet-500" onClick={() => {}} />
        <AppButton text="Click me" bgColor="bg-zinc-500" onClick={() => {}} />
      </AppContainer>
      <AppContainer className="gap-10 flex-wrap" alignItems="items-center" height="h-full" width="w-full" justifyContent="justify-center">
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-red-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-blue-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-secondary" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-green-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-cyan-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-emerald-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-rose-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-teal-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-violet-500" onClick={() => {}} />
        <AppButton text="Click me" height="h-14" width="w-30" border="border-4 border-yellow-500" onClick={() => {}} />
      </AppContainer>
    </AppContainer>
  )
}
