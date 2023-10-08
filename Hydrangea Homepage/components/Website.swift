//
//  Website.swift
//  Hydrangea Homepage
//
//  Created by Acan on 2023/10/8.
//

import SwiftUI
import Foundation

struct Website: View {
    
    var name: String
    var url: String
    var iconUrl: String
    
    init(name: String, url: String) {
        self.name=name
        self.url=url
        self.iconUrl=url+"/favicon.ico"
    }
    
    init(name: String, url: String, iconUrl: String) {
        self.name=name
        self.url=url
        self.iconUrl=iconUrl
    }
    
    var body: some View {
        VStack {
            Link(destination: URL(string: url)!) {
                HStack {
                    Icon(url: iconUrl)
                    Text(name)
                }
            }
        }
    }
}
