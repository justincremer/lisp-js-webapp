import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  listUsers: UserListResponse;
  getUserById: UserResponse;
  getUserByUsernameOrEmail: UserResponse;
  authenticateUser: UserResponse;
  getCurrentUser?: Maybe<UserResponse>;
  listPosts: Array<Post>;
  getPost?: Maybe<Post>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByUsernameOrEmailArgs = {
  input: UserInput;
};


export type QueryAuthenticateUserArgs = {
  input: UserLoginInput;
};


export type QueryGetPostArgs = {
  id: Scalars['Int'];
};

export type UserListResponse = {
  __typename?: 'UserListResponse';
  status?: Maybe<Scalars['String']>;
  userList?: Maybe<Array<User>>;
  errors?: Maybe<Array<FieldError>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  errors?: Maybe<Array<FieldError>>;
};

export type UserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
};

export type UserLoginInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: UserResponse;
  updateUser: UserResponse;
  deleteUserById: UserResponse;
  deleteAllUsers: UserListResponse;
  createPost: Post;
  updatePost: Post;
  upsertPost: Post;
  deletePost: Scalars['Boolean'];
};


export type MutationRegisterUserArgs = {
  input: UserLoginInput;
};


export type MutationUpdateUserArgs = {
  input: UserInput;
  id: Scalars['Int'];
};


export type MutationDeleteUserByIdArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  content: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUpsertPostArgs = {
  content: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'status'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email' | 'firstname' | 'lastname' | 'phone' | 'countryCode'>
    )> }
  ) }
);


export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  registerUser(input: {email: $email, username: $username, password: $password}) {
    status
    errors {
      field
      message
    }
    user {
      id
      username
      email
      firstname
      lastname
      phone
      countryCode
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};