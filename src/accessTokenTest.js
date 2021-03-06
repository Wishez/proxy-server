const jwt = require('jsonwebtoken')
const moment = require('moment')
const keycloakConfig = require('./keycloak-config.json')

const access_token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXdFpIM253OUJFRWJDd2M5TGF4NDdRdFh2RjFUcTdYMTg1Rl9FOTRySGRjIn0.eyJqdGkiOiI1MTU5YjJlYy03NGE0LTRiYzMtOWE0NC0zNTlkY2FmZjNmZTQiLCJleHAiOjE1NDQ3MTM1NjEsIm5iZiI6MCwiaWF0IjoxNTQ0Njk5MTYxLCJpc3MiOiJodHRwOi8vdDJydS1kcy10ZXN0LTA3OjIwODEvYXV0aC9yZWFsbXMvdGVsZTItYjJjIiwiYXVkIjoiYW5kcm9pZC1hcHAiLCJzdWIiOiIwMmVkOWFhYS05ZmZkLTRkYjMtODAxMC04YjcwZTE3YTQ2N2IiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhbmRyb2lkLWFwcCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjM5Zjg0NzNjLTljZGMtNGMzZS1hMDQ0LWQ0NzVmZTIwYTcxYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJjdXJyZW50X3VzZXJuYW1lIjoiNzk3NzUyNTU4MTQiLCJicmFuY2hfaWQiOiI5NSIsIndhaXRpbmdfbGlua3MiOltdLCJhY3RpdmVfbGlua3MiOltdLCJzdWJzX2lkIjoiMTM2MDgxMDUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI3OTc3NTI1NTgxNCJ9.Qb3xckWA9lRxDO0dfuvXikKAE0Avu9HasUSyP7ODDppIXLMbgduzJEAq1L7pudI3wBb6kn6U4QXAhpx55f9V_ZtwrRHa6v6DcTbD_vNW1mPBS4byn8AcFAq7KYs87ODJi6cmZIWcVs-_CBpGOkChUGF0Ph-1z1mDroxrMVFocFVWypFNaVczFYhiXMkW0oUSbHGh83_u3isH_YEmfjCvFHpuq7rneE5J1bRKiAuKP2ZpA8KRDwylwQ5W4LH2p6-dptNjAJM3kxfJDwQqQfG_U7qrxcGQPs6fW8k_FseO-s0tR4xaYIJ24hyhAmEcntYbg7BqEDFlJRYrOOxS64ANcg'
const parsedToken = jwt.decode(access_token)
console.log(parsedToken)

const {
  grant_type,
  client_id,
  updateTimeBeforeExpiration,
} = keycloakConfig.serverConfig
const now = moment()
const tokenExpirationTime = moment.unix(parsedToken.exp)
const timeBeforeExpiration = tokenExpirationTime.diff(now, 'seconds')
console.log('is token not expired', timeBeforeExpiration > updateTimeBeforeExpiration)