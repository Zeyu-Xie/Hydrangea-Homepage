//
//  icon.swift
//  Hydrangea Homepage
//
//  Created by Acan on 2023/10/8.
//

import SwiftUI
import Foundation

struct Icon: View {
    
    var url: String
    
    var body: some View {
        VStack {
            AsyncImage(url: URL(string: url)) { phase in
                switch phase {
                case .empty:
                    ProgressView().frame(width: 24, height: 24)
                case .success(let image):
                    image
                        .resizable()
                        .frame(width: 24, height: 24)
                        .aspectRatio(contentMode: .fit)
                case .failure:
                    Image(systemName: "Global").resizable().frame(width: 24, height: 24).aspectRatio(contentMode: .fit)
                @unknown default:
                    Image(systemName: "Global").resizable().frame(width: 24, height: 24).aspectRatio(contentMode: .fit)
                }
            }
        }
    }
}
