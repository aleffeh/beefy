package com.beefy.inspector;

import android.content.Context;

import com.facebook.react.modules.network.NetworkingModule;

import br.newm.inspector.Inspector;
import br.newm.inspector.NetworkInterceptor;

public class ReactInspector {

  public static void initializeInspector(Context context){

    Inspector.initializeWith(context, 30000);

    initializeNetworkInspector();
  }

  private static void initializeNetworkInspector() {
    NetworkingModule.setCustomClientBuilder(builder -> {
        builder.addNetworkInterceptor(new NetworkInterceptor());
        builder.cookieJar(new InspectorCookieJar());
    });
  }

}
