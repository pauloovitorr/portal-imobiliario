declare module '@glidejs/glide' {
    interface GlideOptions {
        type?: 'slider' | 'carousel'
        startAt?: number
        perView?: number
        gap?: number
        rewind?: boolean
    }

    class Glide {
        constructor(element: HTMLElement, options?: GlideOptions)
        mount(): this
        destroy(): this
    }

    export default Glide
}
