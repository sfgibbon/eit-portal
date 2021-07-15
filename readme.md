# React client and ASPNET core backend

Me mucking around at this time. Trying to get as comfortable using dotnet backend
as I am with nodejs directly or via nextjs.

The front end is a React SPA with Vite for the build.

The backend is a dotnet web server that is primarily about playing the B in the
BFF pattern. It has the APIs the client uses and it also hosts the static react
app.

## Running

In the eit-portal-client folder use `npm run build` to build the client.

In the eit-portal-server folder use `dotnet run` to build and run the server.
The server is configured to statically host the client from
`../eit-portal-client/dist`.

The client is seen at http://localhost:5000

## Development

You can also use `npm run dev` in the client to run the vite dev server. It runs
at http://localhost:3000 and proxies the /api calls to http://localhost:5000.

So it just works. CORS has been configured.

That'll do. Work in progress.
