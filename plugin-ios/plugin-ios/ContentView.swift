//
//  ContentView.swift
//  plugin-ios
//

import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    let url: URL
  
    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        webView.load(URLRequest(url: url))
        return webView
    }
  
    func updateUIView(_ uiView: WKWebView, context: Context) {
        // 在这里你可以根据需求更新WebView
    }
}

struct ContentView: View {
    // 需要加载的链接地址（https://xxx）
    let url = URL(string: "https://faovoj.slinkchat.top/")!
    
    var body: some View {
        ZStack {
            WebView(url: url)
                .edgesIgnoringSafeArea(.all)
            Spacer()
        }
    }
}
  
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

#Preview {
    ContentView()
}
