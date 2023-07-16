import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils";
import { AuthApi, LoginArgs, RegisterArgs, User } from "features/auth/auth.api";

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
};

const register = createAppAsyncThunk<any, RegisterArgs>(THUNK_PREFIXES.REGISTER, (arg) => {
  AuthApi.register(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const login = createAppAsyncThunk<{ user: User }, LoginArgs>("auth/login", async (arg) => {
  const res = await AuthApi.login(arg);
  return { user: res.data };
});

const slice = createSlice({
  name: "auth",
  initialState: { user: null as User | null, isLoading: false },
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload?.user) {
          state.user = action.payload.user;
          state.isLoading = false;
        }
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = slice.reducer;
export const authThunks = { register, login };
