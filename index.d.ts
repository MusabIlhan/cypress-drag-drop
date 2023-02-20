/// <reference types="cypress" />

type Options = Partial<Cypress.ClickOptions & {
  source: Cypress.ClickOptions
  target: Cypress.ClickOptions
  delayAfterMouseDown: number
}>

type MoveOptions = Partial<Cypress.ClickOptions & {
  deltaX: number
  deltaY: number
  delayAfterMouseDown: number
}>

declare namespace Cypress {
  interface Chainable {
    drag<K extends keyof HTMLElementTagNameMap>(targetSelector: K, options?: Options): true
    drag<E extends Node = HTMLElement>(targetSelector: string, options?: Options): true
    drag(targetAlias: string, options?: Options): true
    move(options: MoveOptions): Chainable<Element>
  }
}
