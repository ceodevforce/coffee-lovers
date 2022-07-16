import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

const { GRAPHQL_URL_CMS } = config.public;
const { GRAPHQL_CMS_TOKEN_PERMISSIONS, JWT_SECRET_KEY } = config;

const client = new GraphQLClient(GRAPHQL_URL_CMS, {
  headers: {
    Authorization: `Bearer ${GRAPHQL_CMS_TOKEN_PERMISSIONS}`,
  },
});

const getUserByEmailQuery = gql`
  query GetUserByEmailQuery($email: String!) {
    nuxtUser(where: { email: $email }, stage: DRAFT) {
      id
      email
      password
    }
  }
`;

const updateUserMutation = gql``

export default defineEventHandler(async (event) => {
  // Cookies used here
  // setCookie: (
  //     event: CompatibilityEvent,
  //     name: string,
  //     value: string,
  //     serializeOptions?: CookieSerializeOptions
  // ) => void;

  // Set cookie password using env
  const cookieSet = setCookie(event, "graphcms-token", "COOKIE_PASSWORD222");

  const cookie = useCookie(event.req, "graphcms-token");
  console.log("COOKIES-CMS", cookie);

  const body = await useBody(event);
  const { email, password } = body;
  if (!email || !password) {
    event.res.end();
    return;
  }

  const getUserResponse = await client.request(getUserByEmailQuery, { email });
  console.log("getUserResponse", getUserResponse);
  const { nuxtUser } = getUserResponse;
  if (!nuxtUser) {
    event.res.end();
    return;
  }

  const { password: hashedPassword } = nuxtUser;
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  if (!isPasswordValid) {
    event.res.end();
    return;
  }
  const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: "1day" });

  return {
    api: "works",
    token,
    nuxtUser,
    cookie,
  };
});
