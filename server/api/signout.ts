
const config = useRuntimeConfig()

//FIXME: Use config to add env variables to cookie
const cookie = {
    name: "graphcms-token",
    value: "COOKIE_PASSWORD222",
    options: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true
    }
}
export default defineEventHandler(async (event) => {
    event.req.destroy()
    event.res.statusMessage = "OK"

    return { 
        cookie
    }
})