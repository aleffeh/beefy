package com.beefy.inspector;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;

import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.HttpUrl;

public class InspectorCookieJar implements CookieJar {
  @NotNull
  @Override
  public List<Cookie> loadForRequest(@NotNull HttpUrl httpUrl) {
    return new ArrayList<>();
  }

  @Override
  public void saveFromResponse(@NotNull HttpUrl httpUrl, @NotNull List<Cookie> list) {

  }
}
